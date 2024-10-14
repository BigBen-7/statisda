/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function TeacherModal({ open, setOpen }) {
  const [forms, setForms] = useState([{ id: 1 }]);

  // Function to add a new set of inputs (a new teacher)
  const addAnotherForm = () => {
    setForms([...forms, { id: forms.length + 1 }]);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-10 py-8 text-left shadow-xl transition-all sm:max-w-4xl sm:w-full">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Modal Header */}
            {/* <div className="text-left mb-8">
              <DialogTitle as="h3" className="text-2xl font-semibold text-gray-900">
                Add Teachers
              </DialogTitle>
            </div> */}

            {/* Forms for adding multiple teachers */}
            <form className="space-y-6 mt-8">
              {forms.map((form, index) => (
                <div key={form.id} className="space-y-6">
                  {/* First row (Designation and Add Teachers Title) */}
                  <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-1">
                    <div className="text-left">
                      <DialogTitle as="h3" className="text-2xl font-semibold text-gray-900"
                      >
                        Add Teachers
                      </DialogTitle>
                    </div>
                    <input
                      type="text"
                      placeholder="Designation"
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                    />
                    {/* MANUALLY & CSV  */}
                    </div>
                         <p className="flex gap-8 text-[#4F4F4F] text-lg font-medium" >
                        <span>Manually</span>
                        <span>Import CSV</span>
                      </p>
                  </div>

                  {/* Full Name */}
                  <div className="grid grid-cols-1 gap-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                    />
                  </div>

                  {/* Email, Class, Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="col-span-3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                    />
                    <select className="col-span-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]">
                      <option>Class</option>
                    </select>
                    <select className="col-span-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]">
                      <option>Gender</option>
                    </select>
                  </div>

                  {/* Password and Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="grid grid-cols-1 gap-6">
                    <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]">
                      <option>Subject</option>
                    </select>
                  </div>

                  {/* Divider between teacher entries */}
                  {index < forms.length - 1 && (
                    <hr className="my-6 border-t-2 border-gray-200" />
                  )}
                </div>
              ))}

              {/* Buttons (Add Another and Add Teacher) */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  className="text-[#509CDB] font-semibold"
                  onClick={addAnotherForm}
                >
                  + Add another
                </button>
                <button
                  type="submit"
                  className="bg-[#509CDB] rounded-md px-6 py-3 text-white font-semibold shadow-sm hover:bg-[#2671B1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#509CDB]"
                >
                  Add Teacher
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
