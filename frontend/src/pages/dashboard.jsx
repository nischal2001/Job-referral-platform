import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) router.push('/');
      else {
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', session.user.id)
          .single();
        if (!profile?.full_name) router.push('/');
      }
    };
    checkAuth();
  }, []);

  return (
    <div>
      <h1>Welcome to Your Dashboard!</h1>
      <p>You're now logged in with a complete profile.</p>
    </div>
  );
}