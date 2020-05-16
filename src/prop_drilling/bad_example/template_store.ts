const _templates: string[] = [
  'abcd'
];

export class TemplateStore {
  public loadTemplates = () => {
    return _templates.slice();
  }
}
