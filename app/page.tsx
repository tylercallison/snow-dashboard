import { Fragment } from 'react';
import { CameraSection } from '@/components/camera-section';

const cameraSectionData = [
  {
    title: 'I-80 Cameras',
    cameras: [
      {
        title: 'Dutch Flat',
        description: 'Interstate 80 at Dutch Flat',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atdutchflat.htm',
      },
      {
        title: 'Blue Canyon',
        description: 'Interstate 80 at Blue Canyon',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atwhitmoregrade.htm',
      },
      {
        title: 'Soda Springs',
        description: 'Interstate 80 at Kingvale Eastbound',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atkingvaleeb.htm',
      },
      {
        title: 'Donner Summit',
        description: 'Interstate 80 at Donner Summit',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atdonnersummit.htm',
      },
      {
        title: 'Donner Lake',
        description: 'Interstate 80 at Donner Lake',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atdonnerlake.htm',
      },
      {
        title: 'Truckee',
        description: 'Interstate 80 at Highway 89',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80athwy89.htm',
      },
    ],
  },
  {
    title: 'I-50 Cameras',
    cameras: [
      {
        title: 'Placerville',
        description: 'Interstate 50 at Placerville',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50atbedford.htm',
      },
      {
        title: 'Sky Park',
        description: 'Interstate 50 at Sly Park',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/slyparked50eb2.htm',
      },
      {
        title: 'Twin Bridges',
        description: 'Interstate 50 at Twin Bridges',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50attwinbridges.htm',
      },
      {
        title: 'Echo Summit',
        description: 'Interstate 50 at Echo Summit',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50atechosummit.htm',
      },
      {
        title: 'Meyers',
        description: 'Interstate 50 at Meyers',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50atmeyers.htm',
      },
      {
        title: 'Ski Run',
        description: 'Interstate 50 at Ski Run',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50atskirun.htm',
      },
    ],
  },
];

const Home = () => {
  return (
    <Fragment>
      <div className='my-16'>
        {cameraSectionData.map((sectionData) => (
          <CameraSection
            title={sectionData.title}
            cameras={sectionData.cameras}
            key={sectionData.title}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
