import { IEditorProps } from '../Editor';
import { Help, Profile, Socials, Welcome } from './components';

export const commands: IEditorProps['commands'] = {
  help: { desc: 'check available commands', component: <Help /> },
  profile: { desc: 'view profile CV', component: <Profile /> },
  socials: { desc: 'check out socials accounts', component: <Socials /> },
  clear: { desc: 'clear the terminal' },
  welcome: { desc: 'show welcome message', component: <Welcome /> },
  // TODO: доделать откытие файла
  // ls: { desc: 'show lists files in the current directory', component: <Ls /> },
  // cat: { desc: 'open a file', component: <Help /> },
};

export const files = ['Profile', 'Socials'];
