import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';
import ProfileForm from '../components/ProfileForm';

export default function Home() {
  const [session, setSession] = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) checkProfile(session.user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (session) checkProfile(session.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Check if profile exists
  async function checkProfile(user) {
    const { data } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .single();
    setProfileComplete(!!data?.full_name);
  }

  // Redirect if profile is complete
  useEffect(() => {
    if (session && profileComplete) router.push('/dashboard');
  }, [session, profileComplete]);

  // Show profile form if logged in but no profile
  if (session && !profileComplete) {
    return <ProfileForm user={session.user} />;
  }

  // Show login UI if no session
  if (!session) {
    return (
      <div>
        <h1>Welcome! Please sign in.</h1>
        <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}>
          Sign in with GitHub
        </button>
      </div>
    );
  }

  // Default: Loading redirect
  return <p>Redirecting...</p>;
}