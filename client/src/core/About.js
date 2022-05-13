import React from 'react';
import Layout from '../core/Layout';

const Home = () => {
    return (
        <Layout title="About" description="Made with ❤ by Jainish Bharti">
            <div className="container">
                <a href="https://github.com/jainishbharti05" target="_blank" rel="noopener noreferrer"><h2>Github</h2></a>
                <a href="https://www.linkedin.com/in/jainishbharti/" target="_blank" rel="noopener noreferrer"><h2>LinkedIn</h2></a>
                <a href="https://jainishbharti.me/" target="_blank" rel="noopener noreferrer"><h2>Website</h2></a>
                <a href="mailto:imjainish007@gmail.com"><h2>Email</h2></a>    
            </div>            
        </Layout>
           
    )
};

export default Home
