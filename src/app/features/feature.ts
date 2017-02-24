export class Feature {
  Name: string;
  Description: string;
  Badge: string;

  constructor(name?: string, description?: string, badge?: string) {
    this.Name = name || '';
    this.Description = description || '';
    this.Badge = badge || '';
  }
}
