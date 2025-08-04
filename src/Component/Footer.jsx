import React from 'react'

const Footer = () => {
  return (
    <footer className="text-sm text-gray-500 mb-4 ">
        <p className="text-center">Made Calculator by <a href="https://rashid-khalique.vercel.app/" className="text-blue-900 hover:underline">Rashid Khalique</a></p>

      <div className="flex  gap-4 mt-1">
        <a href="#" className="hover:underline">Cookie Settings</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
    </footer>
  )
}

export default Footer