import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { FaAngleDoubleDown } from 'react-icons/fa';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      textVisible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showDescription: true });
    }, 500);

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY <= 100 && !this.state.textVisible) {
      this.setState({ textVisible: true });
    } else if (window.scrollY > 100 && this.state.textVisible) {
      this.setState({ textVisible: false });
    }
  };

  handleLearnMoreClick = () => {
    this.setState({ textVisible: false });
    this.props.onLearnMoreClick();
  };

  render() {
    const { showDescription, textVisible } = this.state;

    return (
      <div style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {textVisible && (
          <>
            <motion.h2
              style={{ fontSize: '50px', textAlign: 'center' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I am Mohd Arfat
            </motion.h2>
            {showDescription && (
              <motion.h2
                style={{ fontSize: '30px', textAlign: 'center', marginTop: '10px' }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Software Development Engineer
              </motion.h2>
            )}
          </>
        )}
        <span style={{ position:"absolute", bottom:'10%'}}> <motion.div
          style={{ fontSize: '30px', marginTop: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={this.handleLearnMoreClick}
        >
          <FaAngleDoubleDown style={{ marginLeft: '10px' }} />
        </motion.div> </span>
      </div>
    );
  }
}

export default Welcome;
