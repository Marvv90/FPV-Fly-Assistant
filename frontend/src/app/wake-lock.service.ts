import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WakeLockService {
  private wakeLock: any;
  private noSleep: any;

  constructor() {}

  async requestWakeLock() {
    try {
      if ('wakeLock' in navigator) {
        this.wakeLock = await (navigator as any).wakeLock.request('screen');
      }
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  }

  async releaseWakeLock() {
    try {
      if (this.wakeLock) {
        await this.wakeLock.release();
        this.wakeLock = null;
      }
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  }
}
