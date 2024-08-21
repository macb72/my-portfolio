import React, { Component } from 'react';
import Welcome from './Components/Welcome';
import Navbar from './Layout/Navbar';
import Technology from './Components/Technology';
import ContactForm from './Components/ContactForm';
import About from './Components/About';
import WorkExp from './Components/WorkExp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: false,
      isAtTop: true,
    };
  }

  handleLearnMoreClick = () => {
    document.getElementById('technology').scrollIntoView({ behavior: 'smooth' });
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
        <div style={{ height: '100vh', padding: '20px' }}>
          <section id="about">
            <About />
          </section>
          <br />
          <br />
          <section id="work-experience">
            <WorkExp />
          </section>
          <br />
          <br />
          <section id="technology"  >
            <Technology />
          </section>
          <br />
          <br />
          <section id="contact" >
            <ContactForm />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
