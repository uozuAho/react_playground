const _templates: string[] = [
  'template 1',
  'template 2'
];

export class TemplateStore {
  public loadTemplates = (): Promise<string[]> => {
    return Promise.resolve(_templates.slice());
  };

  public delete = (name: string): void => {
    const idx = _templates.indexOf(name);
    if (idx === -1) { return; }
    _templates.splice(idx, 1);
  };
}
