import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import Header from '@/components/header/Header';

export default function Component() {
  return (
    <>
      <Header />
      <div className='max-w-[600px] m-auto'>
        <div className='my-5 border-none bg-transparent'>
          <div className='space-y-8'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-semibold'>Contact Us</h2>
              <p className='text-zinc-500 dark:text-zinc-400'>
                {`Fill out the form below and we'll get back to you as soon as
                  possible.`}
              </p>
            </div>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='first-name'>First name</Label>
                  <Input id='first-name' placeholder='Enter your first name' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='last-name'>Last name</Label>
                  <Input id='last-name' placeholder='Enter your last name' />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' placeholder='Enter your email' type='email' />
              </div>
              <div className='space-y-2'>
                <Label>Pronoun</Label>
                <Select>
                  <SelectTrigger aria-label='Pronoun'>
                    <SelectValue placeholder='Select your pronoun' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pronouns</SelectLabel>
                      <SelectItem value='he/him'>He/Him</SelectItem>
                      <SelectItem value='she/her'>She/Her</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  className='min-h-[100px]'
                  id='message'
                  placeholder='Enter your message'
                />
              </div>
              <Button className='bg-gray-800 text-white' type='submit'>
                Send message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}