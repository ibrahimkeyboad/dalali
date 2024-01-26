import { Button } from '@/components/ui/button';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

function Te() {
  return (
    <Card>
      <div>
        <CardHeader className='flex flex-row items-center space-y-0'>
          <CardTitle>Tenant</CardTitle>
          <Button className='ml-auto' variant='secondary'>
            Edit
          </Button>
        </CardHeader>
        <CardContent className='text-sm'>
          <div className='grid gap-1'>
            <Link className='text-blue-600' href='#'>
              John Doe
            </Link>
            <div>23 total apartments</div>
          </div>
        </CardContent>
      </div>
      <Separator />
      <div>
        <CardHeader>
          <CardTitle>Contact information</CardTitle>
        </CardHeader>
        <CardContent className='text-sm'>
          <div className='grid gap-1'>
            <Link className='text-blue-600' href='#'>
              john@example.com
            </Link>
            <div className='text-gray-500 dark:text-gray-400'>
              +1 888 8888 8888
            </div>
          </div>
        </CardContent>
      </div>
      <Separator />
      <div>
        <CardHeader>
          <CardTitle>Apartment</CardTitle>
        </CardHeader>
        <CardContent className='text-sm'>
          <div>
            John Doe
            <br />
            1234 Main St.
            <br />
            Anytown, CA 12345
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default Te;
