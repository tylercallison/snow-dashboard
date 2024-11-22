import { Fragment } from 'react';
import { CameraSection } from '@/components/camera-section';

const cameraSectionData = [
  {
    title: 'Northstar',
    cameras: [
      {
        title: 'Mid-Mountain',
        description: 'Northstar Mid-Mountain',
        src: 'https://player.brownrice.com/embed/northstarmidmountain',
        isHwy: false,
      },
      {
        title: 'Summit',
        description: 'Northstar Summit',
        src: 'https://player.brownrice.com/embed/northstarspluto',
        isHwy: false,
      },
      {
        title: 'Golf Course',
        description: 'Northstar Golf Course',
        src: 'https://player.brownrice.com/embed/northstargolf',
        isHwy: false,
      },
      {
        title: 'Snow Stake',
        description: 'Northstar Snow Stake',
        src: 'https://player.brownrice.com/embed/northstarsnowstake',
        isHwy: false,
      },
    ],
  },
  {
    title: 'Heavenly',
    cameras: [
      {
        title: 'East Peak',
        description: 'Heavenly East Peak',
        src: 'https://player.brownrice.com/embed/heavenlyeastpeak',
        isHwy: false,
      },
      {
        title: 'Gondola Midstation',
        description: 'Heavenly Gondola Midstation',
        src: 'https://player.brownrice.com/embed/heavenlymidstation',
        isHwy: false,
      },
      {
        title: 'Top of Tram',
        description: 'Heavenly Top of Tram',
        src: 'https://player.brownrice.com/embed/heavenlytram',
        isHwy: false,
      },
      {
        title: 'Top of Dipper',
        description: 'Heavenly Top of Dipper',
        src: 'https://player.brownrice.com/embed/heavenlydipper',
        isHwy: false,
      },
      {
        title: 'Snow Stake',
        description: 'Heavenly Snow Stake',
        src: 'https://player.brownrice.com/embed/heavenlysnowstake',
        isHwy: false,
      },
    ],
  },
  {
    title: 'Kirkwood',
    cameras: [
      {
        title: 'Cornice',
        description: 'Kirkwood Cornice',
        src: 'https://player.brownrice.com/embed/kirkwoodcornice',
        isHwy: false,
      },
      {
        title: 'Red Cliffs',
        description: 'Kirkwood Red Cliffs',
        src: 'https://player.brownrice.com/embed/kirkwoodredcliffs',
        isHwy: false,
      },
      {
        title: 'Snow Stake',
        description: 'Kirkwood Snow Stake',
        src: 'https://player.timecam.tv/express/index.html?C=FA96AJEMC1ED',
        isHwy: false,
      },
    ],
  },
  {
    title: 'I-80 Cameras',
    cameras: [
      {
        title: 'Dutch Flat',
        description: 'Interstate 80 at Dutch Flat',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atdutchflat.htm',
        isHwy: true,
      },
      {
        title: 'Blue Canyon',
        description: 'Interstate 80 at Blue Canyon',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atwhitmoregrade.htm',
        isHwy: true,
      },
      {
        title: 'Soda Springs',
        description: 'Interstate 80 at Kingvale Eastbound',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atkingvaleeb.htm',
        isHwy: true,
      },
      {
        title: 'Donner Summit',
        description: 'Interstate 80 at Donner Summit',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atdonnersummit.htm',
        isHwy: true,
      },
      {
        title: 'Donner Lake',
        description: 'Interstate 80 at Donner Lake',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80atdonnerlake.htm',
        isHwy: true,
      },
      {
        title: 'Truckee',
        description: 'Interstate 80 at Highway 89',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy80athwy89.htm',
        isHwy: true,
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
        isHwy: true,
      },
      {
        title: 'Sky Park',
        description: 'Interstate 50 at Sly Park',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/slyparked50eb2.htm',
        isHwy: true,
      },
      {
        title: 'Twin Bridges',
        description: 'Interstate 50 at Twin Bridges',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50attwinbridges.htm',
        isHwy: true,
      },
      {
        title: 'Echo Summit',
        description: 'Interstate 50 at Echo Summit',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50atechosummit.htm',
        isHwy: true,
      },
      {
        title: 'Meyers',
        description: 'Interstate 50 at Meyers',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50atmeyers.htm',
        isHwy: true,
      },
      {
        title: 'Ski Run',
        description: 'Interstate 50 at Ski Run',
        src: 'https://cwwp2.dot.ca.gov/vm/loc/d3/hwy50atskirun.htm',
        isHwy: true,
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
