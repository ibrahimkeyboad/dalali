import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

async function getSession() {
  return await getServerSession(authOptions);
}

export default getSession;
