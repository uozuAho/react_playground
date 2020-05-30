const _templates: string[] = [
  'template 1',
  'template 2'
];

export interface TemplateStore {
  loadTemplates: () => Promise<string[]>;
  delete: (name: string) => void;
}

export class RemoteTemplateStore implements TemplateStore {
  public loadTemplates = (): Promise<string[]> => {
    return Promise.resolve(_templates.slice());
  };

  public delete = (name: string): void => {
    const idx = _templates.indexOf(name);
    if (idx === -1) { return; }
    _templates.splice(idx, 1);
  };
}
