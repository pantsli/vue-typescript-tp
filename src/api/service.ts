import ax from './axios'

interface Params {
  lang?: string
}
// 获取菜单
export function getMenus (params: Params): Promise<Ajax.AjaxResponse> {
  return ax.post('/api/main_page/menu', { ...params })
            .then((res: Ajax.AxiosResponse) => res.data)
            .catch((e: string) => console.error(e))
}
// 获取菜单
export function getTpVersion (): Promise<Ajax.AjaxResponse> {
  return ax.get('/api/main_page/_get_software_version')
            .then((res: Ajax.AxiosResponse) => res.data)
            .catch((e: string) => console.error(e))
}

// 获取菜单
export function getSerialNumber (): Promise<Ajax.AjaxResponse> {
  return ax.get('/api/main_page/_get_serial_number')
            .then((res: Ajax.AxiosResponse) => res.data)
            .catch((e: string) => console.error(e))
}

// 获取菜单
export function getControllerModel (): Promise<Ajax.AjaxResponse> {
  return ax.get('/status_web_api/fixed/controller/model?t=g')
            .then((res: Ajax.AxiosResponse) => res.data)
            .catch((e: string) => console.error(e))
}

// 获取菜单
export function getControllerVersion (): Promise<Ajax.AjaxResponse> {
  return ax.get('/status_web_api/fixed/controller/version?t=g')
            .then((res: Ajax.AxiosResponse) => res.data)
            .catch((e: string) => console.error(e))
}
