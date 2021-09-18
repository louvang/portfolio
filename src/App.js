import Cursor from './components/Cursor';
import Header from './components/Header';
import Work from './components/Work';
import Footer from './components/Footer';

import CodesheetImg from './assets/work-codesheet.gif';
import AustenImg from './assets/work-austen.png';
import TodoImg from './assets/work-todo.png';
import GifImg from './assets/work-gif.png';
import ResumeImg from './assets/work-resume.gif';
import LibraryImg from './assets/work-library.png';
import CalcImg from './assets/work-calc.png';
import EtchImg from './assets/work-etch.png';

function App() {
  return (
    <div className="App">
      <Cursor />

      <Header />

      <Work
        title="Codesheet"
        imgName={CodesheetImg}
        demoUrl="https://codesheet.herokuapp.com"
        githubUrl="https://github.com/louvang/codesheet"
        specs="HTML, Sass, JavaScript, MongoDB, Express, React, Redux, NodeJS"
        description={`Codesheet is a note-taking app for developers. Devs create their own account, write
            notes (referred to as "sheets") in Markdown or HTML and can share their sheets with peers. These "sheets"
            can be categorized, tagged, and searched for easier access.`}
        date="September 2021"
      />

      <div className="divider"></div>

      <Work
        title="Austen Ipsum Generator"
        imgName={AustenImg}
        demoUrl="https://austenipsum.co/"
        githubUrl="https://github.com/louvang/austen-ipsum"
        specs="HTML, Sass, JavaScript, React, Redux JSON"
        description={`Austen Ipsum generates placeholder text from all or one of Jane Austen's novels. The user can select the paragraph count and which book they want paragraphs pulled from. Because Austen's works can be quite wordy with superfluously long paragraphs, Austen Ipsum uses only a dataset of paragraphs that are 500 characters or less. Doing so provides realistic lengths of text content most similar to articles and content from the web.`}
        date="April 2021"
      />

      <div className="divider"></div>

      <Work
        title="Gif by Emoji"
        imgName={GifImg}
        demoUrl="https://louvang.github.io/gif-by-emoji/"
        githubUrl="https://github.com/louvang/gif-by-emoji"
        specs="HTML, CSS, JavaScript, Giphy API"
        description={`Gif By Emoji uses the Giphy API to generate different GIFs corresponding to the emoji. `}
        date="March 2021"
      />

      <div className="divider"></div>

      <Work
        title="Resume Builder"
        imgName={ResumeImg}
        demoUrl="https://louvang.github.io/resumebuilder/"
        githubUrl="https://github.com/louvang/resumebuilder"
        specs="HTML, Sass, JavaScript, React"
        description={`Resume Builder allows a user to input work experience and education to create a printable version of their resume. The web application uses React state to switch between Edit Mode and Print Mode.`}
        date="March 2021"
      />

      <div className="divider"></div>

      <Work
        title="Todo"
        imgName={TodoImg}
        demoUrl="https://louvang.github.io/todo/"
        githubUrl="https://github.com/louvang/todo"
        specs="HTML, Sass, JavaScript, React, Local Storage"
        description={`This simple Todo list web application that uses Local Storage to store a user's tasks in their browser. Each task can be color-coded based on their priority and titles for the categories of each task can be edited as well.`}
        date="February 2021"
      />

      <div className="divider"></div>

      <Work
        title="Library"
        imgName={LibraryImg}
        demoUrl="https://louvang.github.io/library/"
        githubUrl="https://github.com/louvang/library"
        specs="HTML, Sass, JavaScript, Local Storage"
        description={`Library is a simple reading log that store's a user's log through their browser's Local Storage.`}
        date="February 2021"
      />

      <div className="divider"></div>

      <Work
        title="Calculator"
        imgName={CalcImg}
        demoUrl="https://louvang.github.io/calculator/"
        githubUrl="https://github.com/louvang/calculator"
        specs="HTML, CSS, JavaScript"
        description={`A simple calculator that uses JavaScript to calculate equations. This web app accepts number input via the numpad as well as UI clicks.`}
        date="December 2020"
      />

      <div className="divider"></div>

      <Work
        title="Etch-a-Sketch"
        imgName={EtchImg}
        demoUrl="https://github.com/louvang/etchasketch"
        githubUrl="https://louvang.github.io/etchasketch/"
        specs="HTML, CSS, JavaScript"
        description={`An Etch-A-Sketch app that allows users to change the canvas size and select a custom color to create a drawing by hovering the mouse of the grid.`}
        date="November 2020"
      />

      <div className="divider"></div>

      <Footer />
    </div>
  );
}

export default App;
