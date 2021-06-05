import { Subject } from 'rxjs';

export class LoaderService {
  isLoading: Subject<boolean> = new Subject<boolean>();

  show(): void {
    this.isLoading.next(true);
  }

  hide(): void {
    this.isLoading.next(false);
  }
}
