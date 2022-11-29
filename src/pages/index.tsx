import { Chat } from 'phosphor-react'
import * as Popover from '@radix-ui/react-popover';
import { WidgetForm } from '../components/WidgetForm'
import { trpc } from '../utils/trpc';

export default function Home() {
  const { data } = trpc.hello.useQuery({
    greeting: 'World'
  })

  return (
    <>
      <div className='absolute flex justify-center items-center w-full h-full'>
        <section
          className="border border-white-500
          p-14 rounded-md
          text-white font-bold">
            {data?.message}
        </section>
      </div>
      <div className="h-screen w-screen bg-black flex flex-col gap-4 items-end justify-end p-8">


        <Popover.Root>
          <Popover.Portal>
            <Popover.Content align="end" sideOffset={16}>
              <WidgetForm />
            </Popover.Content>
          </Popover.Portal>

          <Popover.Trigger
          className="bg-violet-500 rounded-full h-12 w-12 flex items-center justify-center hover:bg-violet-600">
            <Chat className="text-white h-5 w-5" weight="bold" />
          </Popover.Trigger>
        </Popover.Root>
      </div>
    </>
  )
}
