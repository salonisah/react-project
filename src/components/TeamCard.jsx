import React from 'react';
import Team from '../layouts/team';
import TeamCard from '../components/TeamCard';

const Teampage = () => {
  return (
    <Team>
      <TeamCard
        imgurl="\images\team\team (1).png"
        heading="Wilson Kuphal"
        paragraph="Founder & CEO"
      />
      <TeamCard
        imgurl="/images/team/team (2).png"
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
  );
};

export default Teampage;
