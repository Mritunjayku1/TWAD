package com.water.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name="MASTER_CATEGORY")
public class MasterCategory  implements Serializable {
	
	

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "CATEGORY_ID", unique = true, nullable = false, precision = 10, scale = 0)
	private Integer categoyId;

	@Column(name = "CATEGORY_NAME", length = 100)
	private String categoryName;
	
	@Column(name = "CATEGORY_DESC", length = 100)
	private String categoryDesc;

	
	
    @Column(name = "STATUS_FLAG", length = 1)
	private Character statusFlag;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TS", nullable = false, length = 26)
	private Date createTs;

	
	@Column(name = "CREATE_USERID", nullable = false, length = 30)
	private String createUserId;

	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "UPDATE_TS", nullable = false, length = 26)
	private Date updateTs;

	
	@Column(name = "UPDATE_USERID", nullable = false, length = 30)
	private String updateUserId;


	public Integer getCategoyId() {
		return categoyId;
	}


	public void setCategoyId(Integer categoyId) {
		this.categoyId = categoyId;
	}


	public String getCategoryName() {
		return categoryName;
	}


	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}


	public Character getStatusFlag() {
		return statusFlag;
	}


	public void setStatusFlag(Character statusFlag) {
		this.statusFlag = statusFlag;
	}


	public Date getCreateTs() {
		return createTs;
	}


	public void setCreateTs(Date createTs) {
		this.createTs = createTs;
	}


	public String getCreateUserId() {
		return createUserId;
	}


	public void setCreateUserId(String createUserId) {
		this.createUserId = createUserId;
	}


	public Date getUpdateTs() {
		return updateTs;
	}


	public void setUpdateTs(Date updateTs) {
		this.updateTs = updateTs;
	}


	public String getUpdateUserId() {
		return updateUserId;
	}


	public void setUpdateUserId(String updateUserId) {
		this.updateUserId = updateUserId;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public String getCategoryDesc() {
		return categoryDesc;
	}


	public void setCategoryDesc(String categoryDesc) {
		this.categoryDesc = categoryDesc;
	}

	
	
	
}
