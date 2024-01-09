import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className='bg-gray-200 dark:bg-black p-5 text-center'>
      <h2 className='text-4xl text-red-600 font-bold'>DISCLAIMER!</h2>
      <p className='p-5'>
        This app is a personal development project and not affiliated with
        Disney+. <br /> It is not a real Disney+ website. <br />
        For transparency, the source code can be found on GitHub below.
        <br />
        Use at your own discretion.
      </p>
      <div className='flex gap-4 justify-center'>
        <a href='https://ymmy1.github.io/'>
          <LibraryBooksIcon fontSize='large' />
        </a>
        <a href='https://github.com/ymmy1/disney-clone'>
          <GitHubIcon fontSize='large' />
        </a>
        <a href='https://www.linkedin.com/in/oleg-nosyrev/'>
          <LinkedInIcon fontSize='large' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
