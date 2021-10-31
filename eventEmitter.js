class EventEmitter<T> extends Subject {
  constructor(isAsync?: boolean): EventEmitter<T>
  emit(value?: T): void
  subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription
}
