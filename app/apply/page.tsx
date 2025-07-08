import React, { useState } from 'react'

const ApplyPage = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    semester: '',
    studyField: '',
    motivation: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('TIDE Application')
    const body = encodeURIComponent(
      `Name: ${form.name}\nAge: ${form.age}\nSemester: ${form.semester}\nStudy Field: ${form.studyField}\nMotivation: ${form.motivation}`
    )
    window.location.href = `mailto:tide.tum@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="mx-auto max-w-xl py-10">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">Apply Now</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg bg-white p-8 shadow dark:bg-gray-900"
      >
        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-200" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="focus:ring-primary-500 w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-200" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            min="16"
            className="focus:ring-primary-500 w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div>
          <label
            className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
            htmlFor="semester"
          >
            Semester
          </label>
          <input
            type="text"
            id="semester"
            name="semester"
            value={form.semester}
            onChange={handleChange}
            required
            className="focus:ring-primary-500 w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div>
          <label
            className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
            htmlFor="studyField"
          >
            Study Field
          </label>
          <input
            type="text"
            id="studyField"
            name="studyField"
            value={form.studyField}
            onChange={handleChange}
            required
            className="focus:ring-primary-500 w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div>
          <label
            className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
            htmlFor="motivation"
          >
            Motivation
          </label>
          <textarea
            id="motivation"
            name="motivation"
            value={form.motivation}
            onChange={handleChange}
            required
            rows={4}
            className="focus:ring-primary-500 w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 focus:ring-primary-400 w-full rounded px-4 py-2 font-semibold text-white focus:ring-2 focus:outline-none"
        >
          Send Application
        </button>
      </form>
    </div>
  )
}

export default ApplyPage
