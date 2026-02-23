import Link from 'next/link'

function Footer() {
  return (
    <footer className="border-t mt-10">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
            
            <div>
              <h4 className="font-semibold mb-3">FlawLess</h4>
              <p>Premium fashion & lifestyle products.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Customer Support</h4>
              <p>Email: support@flawless.com</p>
              <p>Phone: +91 1234567891</p>
            </div>

          </div>

          <div className="text-center text-xs text-gray-500 pb-6">
            © {new Date().getFullYear()} FlawLess. All rights reserved.
          </div>
        </footer>
  )
}

export default Footer