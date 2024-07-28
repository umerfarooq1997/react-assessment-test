import { Link } from 'react-router-dom';

const Navbar = () =>
  <div className="lg:flex lg:border-b border-secondary lg:py-4 py-2 lg:px-0 px-4 justify-between">
    <div className="lg:flex">
      <div className="mr-36">
        <Link className="text-2xl font-semibold" to="/">{'News API'}</Link>
      </div>

      <div className="hidden lg:flex gap-8 items-center">
        <Link className="text-primary font-medium hover:text-tertiary" to="/search/bitcoin">{'Bitcoin'}</Link>
        <Link className="text-primary font-medium hover:text-tertiary" to="/search/technology">{'Technology'}</Link>
        <Link className="text-primary font-medium hover:text-tertiary" to="/search/sports">{'Sports'}</Link>
        <Link className="text-primary font-medium hover:text-tertiary" to="/search/health">{'Health'}</Link>
        <Link className="text-primary font-medium hover:text-tertiary" to="/search/science">{'Science'}</Link>
      </div>
    </div>

    <div className="hidden lg:flex gap-4">
      <Link className="bg-primary text-white py-1 px-4 rounded" type="button">{'Sign up'}</Link>
      <Link className="border  py-1 px-4 rounded" target="_blank" to="https://newsapi.org/docs/endpoints/everything#sources" type="button">{'Visit News API'}</Link>
    </div>
  </div>;

export default Navbar;
