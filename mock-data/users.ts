export interface User {
   id: string;
   name: string;
   avatarUrl: string;
   email: string;
   status: 'online' | 'offline' | 'away';
   role: 'Member' | 'Admin' | 'Guest';
   joinedDate: string;
   teamIds: string[];
}

const avatarUrl = (seed: string) => `https://api.dicebear.com/9.x/glass/svg?seed=${seed}`;

export const statusUserColors = {
   online: '#00cc66',
   offline: '#969696',
   away: '#ffcc00',
};

export const users: User[] = [
   {
      id: 'ln',
      name: 'leonel.ngoya',
      avatarUrl: avatarUrl('ln'),
      email: 'leonelngoya@gmail.com',
      status: 'online',
      role: 'Admin',
      joinedDate: '2022-01-01',
      teamIds: ['CORE', 'PERF', 'DESIGN', 'WEB'],
   },
   {
      id: 'sophia',
      name: 'sophia.reed',
      avatarUrl: avatarUrl('sophiareed'),
      email: 'sophiareed@gmail.com',
      status: 'offline',
      role: 'Admin',
      joinedDate: '2023-06-04',
      teamIds: ['CORE', 'PERF'],
   },
   {
      id: 'mason',
      name: 'mason.carter',
      avatarUrl: avatarUrl('mason'),
      email: 'masoncarter@gmail.com',
      status: 'away',
      role: 'Member',
      joinedDate: '2023-11-01',
      teamIds: ['CORE', 'DESIGN'],
   },
   {
      id: 'emma',
      name: 'emma.jones',
      avatarUrl: avatarUrl('emmajones'),
      email: 'emmajones@gmail.com',
      status: 'online',
      role: 'Member',
      joinedDate: '2023-03-20',
      teamIds: ['CORE'],
   },
   {
      id: 'alex',
      name: 'alex.zhang',
      avatarUrl: avatarUrl('alexzhang'),
      email: 'alexzhang@gmail.com',
      status: 'online',
      role: 'Member',
      joinedDate: '2023-05-15',
      teamIds: ['DESIGN', 'PERF'],
   },
   {
      id: 'olivia',
      name: 'olivia.wilson',
      avatarUrl: avatarUrl('oliviawilson'),
      email: 'oliviawilson@gmail.com',
      status: 'offline',
      role: 'Admin',
      joinedDate: '2022-08-22',
      teamIds: ['PERF'],
   },
   {
      id: 'lucas',
      name: 'lucas.martin',
      avatarUrl: avatarUrl('lucasmartin'),
      email: 'lucasmartin@gmail.com',
      status: 'away',
      role: 'Member',
      joinedDate: '2023-02-14',
      teamIds: ['CORE', 'DESIGN', 'PERF'],
   },
   {
      id: 'isabella',
      name: 'isabella.garcia',
      avatarUrl: avatarUrl('isabellagarcia'),
      email: 'isabellagarcia@gmail.com',
      status: 'online',
      role: 'Member',
      joinedDate: '2022-11-30',
      teamIds: ['DESIGN'],
   },
   {
      id: 'ethan',
      name: 'ethan.brown',
      avatarUrl: avatarUrl('ethanbrown'),
      email: 'ethanbrown@gmail.com',
      status: 'offline',
      role: 'Member',
      joinedDate: '2023-07-18',
      teamIds: ['CORE', 'PERF'],
   },
   {
      id: 'amelia',
      name: 'amelia.kim',
      avatarUrl: avatarUrl('ameliakim'),
      email: 'ameliakim@gmail.com',
      status: 'online',
      role: 'Guest',
      joinedDate: '2022-05-09',
      teamIds: ['DESIGN'],
   },
   {
      id: 'noah',
      name: 'noah.davis',
      avatarUrl: avatarUrl('noahdavis'),
      email: 'noahdavis@gmail.com',
      status: 'away',
      role: 'Member',
      joinedDate: '2023-09-27',
      teamIds: ['CORE'],
   },
   {
      id: 'charlotte',
      name: 'charlotte.miller',
      avatarUrl: avatarUrl('charlottemiller'),
      email: 'charlottemiller@gmail.com',
      status: 'online',
      role: 'Guest',
      joinedDate: '2022-04-03',
      teamIds: ['PERF'],
   },
   {
      id: 'aiden',
      name: 'aiden.thompson',
      avatarUrl: avatarUrl('aidenthompson'),
      email: 'aidenthompson@gmail.com',
      status: 'offline',
      role: 'Admin',
      joinedDate: '2023-01-12',
      teamIds: ['CORE', 'DESIGN'],
   },
   {
      id: 'mia',
      name: 'mia.patel',
      avatarUrl: avatarUrl('miapatel'),
      email: 'miapatel@gmail.com',
      status: 'online',
      role: 'Member',
      joinedDate: '2022-10-05',
      teamIds: ['DESIGN', 'PERF'],
   },
   {
      id: 'logan',
      name: 'logan.wright',
      avatarUrl: avatarUrl('loganwright'),
      email: 'loganwright@gmail.com',
      status: 'away',
      role: 'Guest',
      joinedDate: '2023-08-14',
      teamIds: ['CORE'],
   },
   {
      id: 'harper',
      name: 'harper.robinson',
      avatarUrl: avatarUrl('harperrobinson'),
      email: 'harperrobinson@gmail.com',
      status: 'offline',
      role: 'Member',
      joinedDate: '2022-07-29',
      teamIds: ['PERF'],
   },
   {
      id: 'gabriel',
      name: 'gabriel.nguyen',
      avatarUrl: avatarUrl('gabrielnguyen'),
      email: 'gabrielnguyen@gmail.com',
      status: 'online',
      role: 'Member',
      joinedDate: '2023-04-17',
      teamIds: ['CORE', 'DESIGN'],
   },
   {
      id: 'victoria',
      name: 'victoria.lee',
      avatarUrl: avatarUrl('victorialee'),
      email: 'victorialee@gmail.com',
      status: 'away',
      role: 'Guest',
      joinedDate: '2022-12-08',
      teamIds: ['DESIGN'],
   },
   {
      id: 'daniel',
      name: 'daniel.taylor',
      avatarUrl: avatarUrl('danieltaylor'),
      email: 'danieltaylor@gmail.com',
      status: 'offline',
      role: 'Member',
      joinedDate: '2023-10-21',
      teamIds: ['CORE', 'PERF'],
   },
   {
      id: 'abigail',
      name: 'abigail.moore',
      avatarUrl: avatarUrl('abigailmoore'),
      email: 'abigailmoore@gmail.com',
      status: 'online',
      role: 'Member',
      joinedDate: '2022-06-17',
      teamIds: ['DESIGN', 'PERF'],
   },
];
