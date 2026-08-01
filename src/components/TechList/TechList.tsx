import type { FC } from 'react';
import Icon from '@mdi/react';

import { Tech } from '@typings';

import { cnTechList, techIcons, techNames } from './TechList.const';
import type { ISkillsProps } from './TechList.typings';

import './TechList.css';

const needPadding = (tech: Tech) => tech === Tech.VK || tech === Tech.TELEGRAM;

export const TechList: FC<ISkillsProps> = ({ items, isAll = false }) => (
    <div className={cnTechList({ all: isAll })}>
        {items.map((tech, i) => (
            <div key={i} className={cnTechList('Item')}>
                <Icon
                    className={cnTechList('Icon', {
                        small: needPadding(tech),
                    })}
                    color="#555555"
                    path={techIcons[tech]}
                    size={2}
                />
                <div className={cnTechList('Tooltip')}>{techNames[tech]}</div>
            </div>
        ))}
    </div>
);
