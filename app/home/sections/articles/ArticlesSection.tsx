import FadeIn from '@/app/home/common/animations/FadeIn';
import SectionTitle from '@/app/home/common/components/SectionTitle';
import SectionWrapper from '@/app/home/common/components/SectionWrapper';
import SingleColorAnchor from '@/app/home/common/components/SignleColorAnchor';
import { FaPencilAlt } from 'react-icons/fa';

export default function ArticlesSection() {
  return (
    <SectionWrapper bgColor="background-1" id="articles">
      <FadeIn>
        <SectionTitle title="<Articles />" />
      </FadeIn>

      <FadeIn>
        <p className="text-base md:text-xl text-gray-300 mt-10 mb-10">
          Blog is place where I shared my experiences, wrote about technologies
          and offered self-development tips. Currently I am not developing this
          section but sharing for you as an archive!
        </p>
      </FadeIn>

      <FadeIn>
        <SingleColorAnchor
          text="Discover articles"
          href="/articles"
          color="secondary"
          icon={<FaPencilAlt />}
        />
      </FadeIn>
    </SectionWrapper>
  );
}
