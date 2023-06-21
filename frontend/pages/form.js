import { useRouter } from 'next/router';
import { useState, useEffect, React } from 'react';


function about() {

  const router = useRouter();
  const [formData, setFormData] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //   try {
    //     const formData = /* Get form data */;
    //     const response = await fetch('CREATE_UPDATE_API_URL', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     if (response.ok) {
    // Clean up the local storage
    // localStorage.removeItem('ks_form_details');
    //       router.push('/result');
    //     } else {
    //       console.log('Error occurred during record creation/update');
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

  }

  useEffect(() => {
    // Retrieve the response data from local storage
    const formResponseData = localStorage.getItem('ks_form_details');

    // Handle the case when data is not available in local storage
    if (!formResponseData) {
      router.push('/');
      return;
    }

    // Parse the response data
    const parsedFormData = JSON.parse(formResponseData);

    // Use the parsed data to pre-fill the form fields
    setFormData(parsedFormData);
    setName(parsedFormData.title)

  }, ['']);


  return (
    <>

      <div className='h-screen flex justify-center items-center'>

        <form className='' onSubmit={handleFormSubmit}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="form_name"
              id="form_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="form_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="form_email"
              id="form_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="form_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="form_phone_number"
                id="form_phone_number"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="form_phone_number" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                name="form_dob"
                id="form_dob"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="form_dob" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of birth</label>
            </div>

          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>

    </>
  )
}

export default about