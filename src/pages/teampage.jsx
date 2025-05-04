import React from 'react';
import Banner from '../components/Banner';
import Team  from '../layouts/team';
import TeamCard  from '../components/TeamCard';
const Teampage = () => {
  return (
    <>
<Banner
        heading="TEAMS"
        item="Teams"
        imageUrl="\images\about_us.jpg\Pexels Photo by fauxels.png"
      />
      <Team>
  <TeamCard
    imgurl="/images/team/team-1.png"
    heading="Wilson Kuphal"
    paragraph="Founder & CEO"
  />
  <TeamCard
    imgurl="/images/team/team-2.png"
    heading="Juanita Mertz"
    paragraph="Chief Strategy Officer (CSO)"
  />
  <TeamCard
    imgurl="/images/team/team-3.png"
    heading="Vera Jast"
    paragraph="Senior Business Consultant"
  />
  <TeamCard
    imgurl="/images/team/team-3.png"
    heading="Vera Jast"
    paragraph="Senior Business Consultant"
  />
  <TeamCard
    imgurl="/images/team/team-3.png"
    heading="Vera Jast"
    paragraph="Senior Business Consultant"
  />
  <TeamCard
    imgurl="/images/team/team-3.png"
    heading="Vera Jast"
    paragraph="Senior Business Consultant"
  />

</Team>
     
      </>
          );
};

export default Teampage;