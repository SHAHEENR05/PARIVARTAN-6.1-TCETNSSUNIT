import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="wrap py-28 text-center">
      <p className="masthead brand-ink text-[72px]">परिवर्तन</p>
      <h1 className="t-h2 mt-4">This page isn’t in the magazine</h1>
      <p className="t-lead mt-3">The link may be incomplete. Head back to the highlights to continue reading.</p>
      <Link to="/" className="btn-solid mt-8">Back to highlights</Link>
    </div>
  );
}
