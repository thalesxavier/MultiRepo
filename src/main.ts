import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
   loadRemoteEntry(
      { type: 'module', remoteEntry: 'http://localhost:8051/globais/remoteEntry.js' }
   ),
   loadRemoteEntry(
      { type: 'module', remoteEntry: 'http://localhost:5013/remoteEntry.js' }
   )
   ,
   loadRemoteEntry(
      { type: 'module', remoteEntry: 'http://bhn050103121:8051/poc-po-ui/remoteEntry.js' }
   )

   
])
   .catch(err => console.error('Error loading remote entries', err))
   .then(() => import('./bootstrap'))
   .catch(err => console.error(err));
