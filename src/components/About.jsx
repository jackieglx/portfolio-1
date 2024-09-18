import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className="bg-white py-20" id='about'>
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} className='w-full h-64'/>
                <article>
                    <SectionTitle text='about me'/>
                    <p className='text-slate-600 mt-8 leading-loose'>
                        I am a full stack web developer from Seattle, WA.
                        I've got multiple experience in developing microservices and scalable applications for both front-end and back-end. Previously,
                        I worked as a user behavior analyst. Although I'm relatively new to the tech industry, after two years of dedicated learning and practice,
                        I see myself as a fast and lifelong learner who loves to dig into what’s behind the scenes,
                        hence I'm prepared to go all out to demonstrate my abilities.
                    </p>
                </article>
            </div>
        </section>
    )
}
export default About
