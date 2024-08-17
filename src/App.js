import React, { Component } from 'react';
import Welcome from './Components/Welcome';
import Navbar from './Layout/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: false,
      isAtTop: true,
    };
  }

  handleLearnMoreClick = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    this.setState({ showNavbar: true });
  };

  handleScroll = () => {
    const { isAtTop } = this.state;
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100 && isAtTop) {
      this.setState({ isAtTop: false, showNavbar: true });
    } else if (scrollPosition <= 100 && !isAtTop) {
      this.setState({ isAtTop: true });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { showNavbar } = this.state;

    return (
      <div className='App-background' style={{ position: 'relative' }}>
        <Navbar isVisible={showNavbar} />
        <Welcome onLearnMoreClick={this.handleLearnMoreClick} />
        <section id="about" style={{ height: '100vh', padding: '20px' }}>
          <h2>About</h2>
          <p>This is the About section.</p>
        </section>
        <section id="contact" style={{ height: '100vh', padding: '20px' }}>
          <h2>Contact Me</h2>
          <p>This is the Contact Me section.</p>
        </section>
      </div>
    );
  }
}

export default App;
