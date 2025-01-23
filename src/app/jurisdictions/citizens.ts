export interface Citizens{
  service_id:string;
  service_name:string
  requested_datetime:string
  jurisdiction_id:string
  typology:{
    icon:string
  }
  address:string
  description:string
  lat:number
  long:number
  status_node:{
    visible_name:string
  }
}

