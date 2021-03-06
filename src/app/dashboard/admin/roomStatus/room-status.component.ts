import { Component, OnInit, OnDestroy} from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';

import { ErrorHandlerService } from '../../../error-handler.service';
import { AdminRoomStatusService } from './room-status.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import * as $ from 'jquery'

declare var $: any;

var temp_change: boolean = false
var room_status_id: string
var temperature: number

@Component
({
	selector: 'room-status-cmp',
  templateUrl: 'room-status.component.html',
  styleUrls: ['./room-status.component.css']
})

export class AdminRoomStatusComponent implements OnInit, OnDestroy
{
	constructor(private adminRoomStatusService: AdminRoomStatusService, private errorHandlerService: ErrorHandlerService){
    interval(4000)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe( x =>
        {
        this.adminRoomStatusService.CheckRoomControlData()
        .subscribe( data => {
          console.log(data)
          if(data['room_control_updated'] == false)
          {
            console.log("UPDATE")
            this.ngOnInit()
          }
        })
      })
	}

	room_status: object[]
	devices: object[]
	

	class = [["","",""],["","",""]]
	key2: string = 'id'
	reverse2: boolean = false
  row2 = 10
  private unsubscribe: Subject<void> = new Subject();
  totalUsr: number
	tempID2
	filter2: string
	p2: number = 1;

	filter: string
	row = 9
  p = 1

  ngOnDestroy(){
    console.debug("Destroying");
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

	ngOnInit()
	{				
		this.adminRoomStatusService.GetRoomStatus()
		.subscribe( data =>
		{						
			this.room_status = data['room_status']
			this.room_status.forEach( room =>
			{						
				room['devices'].forEach( device =>
				{					
					if(device['remote_design'] == "Temperature Slider")
					{
						$(document).ready(function(){
							$("#"+device['room_status_id']).ionRangeSlider({					
					            min: device['min'],
					            max: device['max'],
					            from: device['device_status'],
					            postfix: device['postfix'],
					            prettify: device['prettify'],
					            hasGrid: device['hasGrid'],
					            disable: device['disable'],					           
					            onFinish: function(data)
					            {									            	     
					            	var room_status_id1 = data['input'][0]['id']					            	
					            	var temperature1 = data['fromNumber']
					            	console.log(temperature1)
					            	temperature = temperature1
					            	room_status_id = room_status_id1
					            	temp_change = true								       	
					            }
					        });
						})
					}					
				})				 
			})					
		})		
	}

	getRoomDevice(room_id)
	{
		this.adminRoomStatusService.room_id = room_id
		this.adminRoomStatusService.GetAllDevice()
		.subscribe( data =>
		{
			// this.sessionService.updateToken(data['token'])
			this.devices = data['devices']
			console.log("devices", this.devices)
			this.totalUsr = this.devices.length
			console.log(this.totalUsr)
		},(error: HttpErrorResponse) =>
			{
				this.errorHandlerService.handleError(error)
			})
	}

	addRoomDevice(input: NgForm)
	{		
		var data = []
		this.devices.forEach( device =>
			{
				if(input.value["a"+device['id']] == true)
				{															
					data.push(device['id'])
				}			
			})
		console.log(data)
		if(data.length != 0)
		{
			this.adminRoomStatusService.AddRoomDevice(data)
			.subscribe( data =>
			{
				this.ngOnInit()
			},(error: HttpErrorResponse) =>
				{
					this.errorHandlerService.handleError(error)
				})
		}
	}

	deleteRoomDevice(id: string)
	{
		this.adminRoomStatusService.deleteRoomDevice(id)
		.subscribe( data =>
		{
			this.ngOnInit()
		},(error: HttpErrorResponse) =>
				{
					this.errorHandlerService.handleError(error)
				})
	}

	valuechange(value: any) // CONTROLL DEVICE
	{		
		var room_status_id = value['target']['id']		
		var data = {value: value['target']['checked']}
		this.adminRoomStatusService.ControlDevice(data,room_status_id)
		.subscribe( data =>
		{
						
		})
	}

	sort(key, id: number)
	{				
		this.key2 = key;
		this.reverse2 = !this.reverse2;
		if(this.class[0][id] == "" || this.class[0][id] == "-asc")
		{
			this.class[0][id] = "-desc"
		}
		else if(this.class[0][id] == "-desc")
		{
			this.class[0][id] = "-asc"
		}		
		this.class[1][this.tempID2] = ""
		this.class[1][id] = "active"
		this.tempID2 = id		
	}

	manageRow2(length: number)
	{		
		this.row2 = length
		if(length == 200)
		{
			this.row2 = this.totalUsr
		}		
		this.selecTag()
	}

	selecTag()
	{	
		var class_name = document.getElementById("rt-selectList").className		
		if(class_name == "dropdown-menu")
		{
			document.getElementById("rt-selectList").className += " show"
		}
		if(class_name == "dropdown-menu show")
		{
			document.getElementById("rt-selectList").className = "dropdown-menu"
		}
	}	

	ngDoCheck()
	{
		if(temp_change == true)
		{
			var data = {value: temperature}
			console.log(data)
			this.adminRoomStatusService.ControlDevice(data,room_status_id)
			.subscribe( data =>
			{
				this.ngOnInit()
			})
			temp_change = false
		}
	}	
}
