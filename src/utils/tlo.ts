// @ts-expect-error -- no types
import fs from 'fs';
// @ts-expect-error -- no types
import yaml from 'js-yaml';

import { marked } from 'marked';
import { BLOG_BASE, getPermalink } from './permalinks';

export const toMarkdown = (markdown) => {
  return marked.parse(markdown)
}

export const getMorePosts = (): string => getPermalink([BLOG_BASE, '2'].join('/'));

function loadSchedule(): Schedule {
  // Load entire schedule
  let schedule = yaml.load(fs.readFileSync('src/schedule.yaml', 'utf8'));
  // Filter out dates in the past
  schedule = schedule.filter((entry) => new Date(entry.end_time) >= new Date())
  // Clean up for display
  schedule = schedule.map((entry) => {
    // Convert start and end times to dates
    const start = new Date(entry.start_time)
    const end = new Date(entry.end_time)
    // Format start string
    const start_string = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: entry.timezone,
    }).format(start).replace(`, ${start.getFullYear()}`, '')
    // Location string dictionary
    const locations = {
      kafm: 'KAFM Community Radio, Grand Junction, CO',
      wfit: 'WFIT, Melbourne, FL',
      ltw: 'Louder Than War Radio, UK'
    }
    return {
      start,
      end,
      start_string,
      location: locations[entry.location],
      notes: entry.notes
    }
  })
  // Only return the next five airdates
  return schedule.slice(0, 5)
}

function firstScheduleItem(): Airdate {
  return loadSchedule()[0]
}

function localTimezone(): string {
  return `[${Intl.DateTimeFormat().resolvedOptions().timeZone}]`
}

export const schedule = loadSchedule()
export const nextAirdate = firstScheduleItem()
export const localTimeZone = localTimezone()
interface Airdate {
  start: Date,
  end: Date,
  start_string: string,
  location: string,
  notes: string | null
}

type Schedule = Airdate[]