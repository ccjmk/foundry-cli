import Command from '../command';
import openCompendiumCommand from './openCompendium';
import runMacroCommand from './runMacro';
import openSheetByNameCommand from './openSheetByName';
import openSheetByPlayerCommand from './openSheetByPlayer';
import showAllowedCommand from './showAllowedCommands';
import focusTabCommand from './focusTab';

const registerCommands = (register: (command: Command, replace: boolean, silentError: boolean) => void) => {
  register(openSheetByNameCommand, false, true);
  register(openSheetByPlayerCommand, false, true);
  register(openCompendiumCommand, false, true);
  register(runMacroCommand, false, true);
  register(showAllowedCommand, false, true);
  register(focusTabCommand, false, true);
};

export default registerCommands;
