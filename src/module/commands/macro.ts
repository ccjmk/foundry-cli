import Command from '../Command';
import { ARGUMENT_TYPES, getGame, localize } from '../utils/moduleUtils';

const macroCommand: Command = {
  name: 'macro',
  description: 'executes a macro by name',
  schema: 'macro $name',
  args: [
    {
      name: 'name',
      type: ARGUMENT_TYPES.STRING,
    },
  ],
  handler: ({ name }) => {
    const macro = getGame().macros?.getName(name);
    if (!macro) {
      ui.notifications?.error(`Unable to find macro with name [${name}]`);
      return;
    }
    macro.execute();
  },
};
export default macroCommand;
