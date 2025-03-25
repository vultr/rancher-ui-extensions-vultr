import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';

// Init the package
export default function(plugin: IPlugin): void {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // Load a product
  // This specifically sets the icon for the node driver, not the extension itself.
  plugin.register('image', 'providers/vultr.svg', 'https://helm-charts.ewr1.vultrobjects.com/icons/vultr.svg');
}
