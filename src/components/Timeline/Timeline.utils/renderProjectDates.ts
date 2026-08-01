import type { ILocale, IProject } from '@typings';

export function renderProjectDates(project: IProject, locale: ILocale['timeline']): string {
    const months = locale.monthsShort;

    return [project.status.since, project.status.until]
        .filter((date): date is string => Boolean(date))
        .map(date => {
            const [year, month, day] = date.split('/').map(Number);

            return [day, months[month - 1], year].filter(Boolean).join(' ');
        })
        .concat([locale.now])
        .slice(0, 2)
        .join(' — ');
}
