'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';

const SearchInputSchema = z.object({
  input: z.string().min(2).max(30, { message: 'Maximum 30 characters' }),
});

function SearchInput() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SearchInputSchema>>({
    resolver: zodResolver(SearchInputSchema),
    defaultValues: {
      input: '',
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SearchInputSchema>) {
    router.push(`/search/${values.input}`);
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='input'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Search...' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default SearchInput;
