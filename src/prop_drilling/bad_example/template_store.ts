const _templates: string[] = [
  'template 1',
  'template 2'
];

export class TemplateStore {
  public loadTemplates = () => {
    return _templates.slice();
  }
}
