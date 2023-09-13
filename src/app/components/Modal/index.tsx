import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import DeleteTitle from '@/app/components/modal/DeleteTitle';
import EditTitle from '@/app/components/modal/EditTitle';

type ModalTypes = 'delete' | 'edit';

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title: string;
  body?: React.ReactElement;
  type: ModalTypes;
}

export default function Modal({ title, isOpen, onClose, body, type }: Modal) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="section" className="relative z-10 " onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-10"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-specno-light-bg p-6 text-left align-middle shadow-xl transition-all">
                {/*TODO: Create TitleType Component */}
                {type === 'delete' && (
                  <DeleteTitle title={title} onClose={onClose} />
                )}
                {type === 'edit' && (
                  <EditTitle title={title} onClose={onClose} />
                )}

                <div className="mt-7">{body}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}