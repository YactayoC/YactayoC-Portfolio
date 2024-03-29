import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dataSkills } from '@/data';
import Skill from '../Skill';

export default function Skills() {
  const { t } = useTranslation();
  const [skillsCategory, setSkillsCategory] = useState({ index: 0, category: 'frontend' });

  const onClickCategory = (index: number, category: string) => {
    setSkillsCategory({ ...skillsCategory, index, category });
  };

  return (
    <section className="flex flex-col items-center container-section mt-36 gap-y-16" id="skills">
      <h2 className="text-6xl font-bold text-center text-gradient-2">{t('home-skills')}</h2>

      {/* Skills */}
      <div className="flex flex-col w-full m-auto font-medium gap-y-16 lg:w-[70%] ">
        <div className="flex justify-between text-gray-50">
          <div
            className={`tab ${skillsCategory.index === 0 && 'tab-active'}`}
            onClick={() => onClickCategory(0, 'frontend')}
          >
            Frontend
          </div>
          <div
            className={`tab ${skillsCategory.index === 1 && 'tab-active'}`}
            onClick={() => onClickCategory(1, 'backend')}
          >
            Backend
          </div>
          <div
            className={`tab ${skillsCategory.index === 2 && 'tab-active'}`}
            onClick={() => onClickCategory(2, 'database')}
          >
            {t('home-skills-database')}
          </div>
          <div
            className={`tab ${skillsCategory.index === 3 && 'tab-active'}`}
            onClick={() => onClickCategory(3, 'others')}
          >
            {t('home-skills-others')}
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center gap-y-20">
          {dataSkills
            .filter((skill) => skill.category === skillsCategory.category)
            .map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
        </div>
      </div>
    </section>
  );
}
