import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  user?: User;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      <AvatarImage src='/images/pisi.jpg' alt='@shadcn' />
      <AvatarFallback>pisi</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

//h-28 w-28
