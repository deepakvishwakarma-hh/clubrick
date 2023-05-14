export interface GENERATE_REPORT_TYPE {
  report_type: string;
  reporting_user_id?: number;
  report_reason: string;
  report_description?: string;

  item_id: number;
}
