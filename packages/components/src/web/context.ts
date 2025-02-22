import { ColorPicker } from "./components/color-picker.ts";
import { DatePicker } from "./components/date-picker.ts";
import { QrScanner } from "./components/qr-scanner.ts";
import { TimePicker } from "./components/time-picker.ts";

// Keep in sync with components.
export type WebAppRawData =
  | QrScanner.Result
  | DatePicker.Result
  | TimePicker.Result
  | ColorPicker.Result;

// Keep in sync with components.
export type WebAppData =
  | QrScanner.TransformedResult
  | DatePicker.TransformedResult
  | TimePicker.TransformedResult
  | ColorPicker.TransformedResult;

export interface WebAppDataFlavor<
  TRawData = WebAppRawData,
  TData = WebAppData,
> {
  webAppDataRaw?: TRawData;
  webAppData?: TData;
}
