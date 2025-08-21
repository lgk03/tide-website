'use client'

import React, { useState } from 'react'

type SubmissionStatus = {
  submitting: boolean
  succeeded: boolean
  error: string | null
}

const ApplyPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    semester: '',
    studyField: '',
    motivation: '',
    estimatedHours: '',
    linkedin: '',
  })

  const [status, setStatus] = useState<SubmissionStatus>({
    submitting: false,
    succeeded: false,
    error: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ submitting: true, succeeded: false, error: null })

    try {
      const formElement = e.currentTarget
      const formData = new FormData(formElement)
      formData.append('_subject', 'TIDE Application')

      const response = await fetch('https://formspree.io/f/xdkdvwpw', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: null })
        setForm({
          name: '',
          email: '',
          semester: '',
          studyField: '',
          motivation: '',
          estimatedHours: '',
          linkedin: '',
        })
        formElement.reset()
      } else {
        const data = await response.json().catch(() => null)
        const message =
          data?.error || data?.errors?.[0]?.message || 'Something went wrong. Please try again.'
        setStatus({ submitting: false, succeeded: false, error: message })
      }
    } catch (err) {
      setStatus({ submitting: false, succeeded: false, error: 'Network error. Please try again.' })
    }
  }

  return (
    <div className="mx-auto max-w-xl py-10">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">Apply Now</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg bg-white p-8 shadow dark:bg-gray-900"
      >
        {status.succeeded && (
          <p className="rounded-md bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-300">
            Thank you! Your application has been submitted.
          </p>
        )}
        {status.error && (
          <p className="rounded-md bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-300">
            {status.error}
          </p>
        )}
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
          <label
            className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
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
        <div>
          <label
            className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
            htmlFor="estimatedHours"
          >
            Estimated Time for Initiative (hours per week)
          </label>
          <input
            type="number"
            id="estimatedHours"
            name="estimatedHours"
            value={form.estimatedHours}
            onChange={handleChange}
            min="0"
            step="1"
            placeholder="e.g., 5"
            className="focus:ring-primary-500 w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div>
          <label
            className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
            htmlFor="linkedin"
          >
            LinkedIn (optional)
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="https://www.linkedin.com/in/your-profile"
            className="focus:ring-primary-500 w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        {/* <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-200" htmlFor="cv">
            CV (optional)
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf,.doc,.docx,.txt,.rtf"
            disabled
            className="focus:ring-primary-500 w-full cursor-not-allowed rounded border border-gray-300 px-3 py-2 opacity-60 file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-sm focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:file:bg-gray-700"
          />
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">File uploads coming soon. || Upgrade Formspree</p>
        </div> */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        <button
          type="submit"
          disabled={status.submitting}
          className="bg-primary-500 hover:bg-primary-600 focus:ring-primary-400 w-full rounded px-4 py-2 font-semibold text-white focus:ring-2 focus:outline-none disabled:opacity-60"
        >
          {status.submitting ? 'Submitting...' : 'Send Application'}
        </button>
      </form>
    </div>
  )
}

export default ApplyPage
