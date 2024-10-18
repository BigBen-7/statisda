/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function TeacherModal({ open, setOpen, addTeachers }) {
  const [forms, setForms] = useState([
    {
      id: 1,
      name: '',
      email: '',
      class: '',
      gender: '',
      subject: '',
      password: '',
      phone: ''
    }
  ]);

  // Function to handle form input changes for each teacher
  const handleInputChange = (index, field, value) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value; // Dynamically update the specific field for the corresponding teacher
    setForms(updatedForms); // Update the forms state with the modified form
  };

  // Function to add another form for a new teacher
  const addAnotherForm = () => {
    setForms([...forms, { id: forms.length + 1, name: '', email: '', class: '', gender: '', subject: '', password: '', phone: '' }]);
  };

  // Function to submit all teacher forms at once
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled out
    const incompleteForms = forms.some(
      (form) => !form.name || !form.email || !form.class || !form.gender || !form.password || !form.phone || !form.subject
    );
    
    if (incompleteForms) {
      alert('Please fill out all fields before adding teachers.');
      return;
    }

    // Call the addTeachers function from parent to update the teacher list
    addTeachers(forms);

    // Reset the modal
    setForms([{ id: 1, name: '', email: '', class: '', gender: '', subject: '', password: '', phone: '' }]);
    setOpen(false); // Close the modal after submission
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
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
            <div className="text-left mb-8">
              <DialogTitle as="h3" className="text-2xl font-semibold text-gray-900">
                Add Teachers
              </DialogTitle>
            </div>

            {/* Forms for adding multiple teachers */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {forms.map((form, index) => (
                <div key={form.id} className="space-y-6">
                  {/* Full Name */}
                  <div className="grid grid-cols-1 gap-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      value={form.name}
                      onChange={(e) => handleInputChange(index, 'name', e.target.value)} // Update the name field
                    />
                  </div>

                  {/* Email, Class, Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="col-span-3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      value={form.email}
                      onChange={(e) => handleInputChange(index, 'email', e.target.value)} // Update the email field
                    />
                    <input
                      type="text"
                      placeholder="Class"
                      className="col-span-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      value={form.class}
                      onChange={(e) => handleInputChange(index, 'class', e.target.value)} // Update the class field
                    />
                    <select
                      className="col-span-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      value={form.gender}
                      onChange={(e) => handleInputChange(index, 'gender', e.target.value)} // Update the gender field
                    >
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  {/* Password and Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      value={form.password}
                      onChange={(e) => handleInputChange(index, 'password', e.target.value)} // Update the password field
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      value={form.phone}
                      onChange={(e) => handleInputChange(index, 'phone', e.target.value)} // Update the phone number field
                    />
                  </div>

                  {/* Subject */}
                  <div className="grid grid-cols-1 gap-6">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      value={form.subject}
                      onChange={(e) => handleInputChange(index, 'subject', e.target.value)} // Update the subject field
                    />
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
